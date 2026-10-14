/**
 * Small UI tones for the Organic Mitra chatbot, made with the Web Audio API (no audio files).
 * Browsers only allow sound after the visitor has interacted with the page; every tone here
 * is triggered by a click or a send, so that is always the case. Failures are silent.
 */

type Note = { freq: number; at: number; dur: number; gain?: number; type?: OscillatorType };

let ctx: AudioContext | null = null;

const audio = (): AudioContext | null => {
  if (typeof window === "undefined") return null;
  try {
    if (!ctx) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return null;
      ctx = new Ctor();
    }
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
};

const play = (notes: Note[]) => {
  const ac = audio();
  if (!ac) return;
  const now = ac.currentTime;
  for (const n of notes) {
    const osc = ac.createOscillator();
    const amp = ac.createGain();
    osc.type = n.type ?? "sine";
    osc.frequency.setValueAtTime(n.freq, now + n.at);
    // short attack, smooth fade — soft "pop" rather than a beep
    const peak = n.gain ?? 0.12;
    amp.gain.setValueAtTime(0.0001, now + n.at);
    amp.gain.exponentialRampToValueAtTime(peak, now + n.at + 0.015);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + n.at + n.dur);
    osc.connect(amp).connect(ac.destination);
    osc.start(now + n.at);
    osc.stop(now + n.at + n.dur + 0.02);
  }
};

export const chatSounds = {
  // rising two-note chime
  open: () =>
    play([
      { freq: 660, at: 0, dur: 0.16 },
      { freq: 990, at: 0.09, dur: 0.24 },
    ]),
  // falling two-note chime
  close: () =>
    play([
      { freq: 880, at: 0, dur: 0.14, gain: 0.09 },
      { freq: 587, at: 0.08, dur: 0.2, gain: 0.09 },
    ]),
  // quick "swoosh" blip when the visitor sends a message
  send: () => play([{ freq: 520, at: 0, dur: 0.09, gain: 0.1, type: "triangle" }, { freq: 780, at: 0.05, dur: 0.12, gain: 0.08, type: "triangle" }]),
  // gentle ding when Organic Mitra starts replying
  receive: () =>
    play([
      { freq: 1046, at: 0, dur: 0.22, gain: 0.08 },
      { freq: 1318, at: 0.07, dur: 0.3, gain: 0.06 },
    ]),
};
