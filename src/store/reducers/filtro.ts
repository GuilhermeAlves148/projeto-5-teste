import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  criterio: 'favoritos' | 'todas'
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
