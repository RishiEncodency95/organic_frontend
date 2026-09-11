import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RegistrationState {
    eventId: string;
    exhibitorName: string;
    typeOfBusiness: string;
    industrySector: string;
    website: string;
    country: string;
    state: string;
    city: string;
    participation: {
        stallNo: string;
        stallSize: number;
        stallType: string;
        rate: number;
        currency: string;
    };
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: RegistrationState = {
    eventId: '',
    exhibitorName: '',
    typeOfBusiness: '',
    industrySector: '',
    website: '',
    country: '',
    state: '',
    city: '',
    participation: {
        stallNo: '',
        stallSize: 0,
        stallType: 'Shell Space',
        rate: 0,
        currency: 'INR'
    },
    status: 'idle'
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        updateRegistrationField(state, action: PayloadAction<{ field: keyof RegistrationState; value: any }>) {
            // @ts-ignore
            state[action.payload.field] = action.payload.value;
        },
        updateParticipationField(state, action: PayloadAction<{ field: string; value: any }>) {
            state.participation = { ...state.participation, [action.payload.field]: action.payload.value };
        }
    }
});

export const { updateRegistrationField, updateParticipationField } = registrationSlice.actions;
export default registrationSlice.reducer;
