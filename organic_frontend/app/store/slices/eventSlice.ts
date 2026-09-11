import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { eventApi } from '@/lib/api';

interface EventState {
    activeEvents: any[];
    selectedEventId: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: EventState = {
    activeEvents: [],
    selectedEventId: null,
    status: 'idle',
    error: null,
};

export const fetchActiveEvents = createAsyncThunk(
    'events/fetchActiveEvents',
    async () => {
        const response = await eventApi.getActive();
        return Array.isArray(response) ? response : (response?.data || []);
    }
);

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setSelectedEventId(state, action: PayloadAction<string>) {
            state.selectedEventId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActiveEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchActiveEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.activeEvents = action.payload;
                // Auto-select first event if none selected and events exist
                if (!state.selectedEventId && action.payload.length > 0) {
                    state.selectedEventId = action.payload[0]._id;
                }
            })
            .addCase(fetchActiveEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch events';
            });
    },
});

export const { setSelectedEventId } = eventSlice.actions;
export default eventSlice.reducer;
