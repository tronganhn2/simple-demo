import noop from 'lodash/noop';
import { createContext, useContext } from 'react';
import { EMPTY_STRING } from '../../shared/constants/constants';

const defaultSelectedCitizenContextValue = {
    selectedCitizenId: EMPTY_STRING,
    setSelectedCitizenId: noop
}
export type SelectedCitizenContextValue = {
    selectedCitizenId: string
    setSelectedCitizenId: React.Dispatch<React.SetStateAction<string>>
}

/**
* Context which includes selectedCitizenId and method setSelectedCitizenId to change the id
* Using context in this small example might be redundant, yet it's for demo-ing coding style
*/
export const SelectedCitizenContext = createContext<SelectedCitizenContextValue>(defaultSelectedCitizenContextValue);

/**
* Custom hook to use the SelectedCitizenContext
*/
export const useSelectedCitizenContext = (): SelectedCitizenContextValue => useContext(SelectedCitizenContext);