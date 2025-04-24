import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    animals: [],
    selectedAnimal: null,
    loading: false,
    error: null
};

export const fetchAnimals = createAsyncThunk(
    'animals/fetchAnimals',
    async () => {
        const response = await fetch('http://localhost:4000/api/animals');
        const data = await response.json();
        console.log('API Response:', data); 
        return data;
    }
)

const animalSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        setSelectedAnimal: (state, action) => {
            state.selectedAnimal = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnimals.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAnimals.fulfilled, (state, action) => {
                console.log('Animals fetched:', action.payload);
                state.loading = false;
                state.animals = action.payload;
            })
            .addCase(fetchAnimals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }

});

export const { setSelectedAnimal } = animalSlice.actions;
export default animalSlice.reducer;