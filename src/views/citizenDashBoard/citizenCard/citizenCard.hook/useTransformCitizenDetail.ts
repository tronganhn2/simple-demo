import { useCallback } from 'react';
import { MAXIMUM_ALLOWED_AGE } from '../../CitizenDashBoard.constant';
import { CitizenDetail } from '../../CitizenDashBoard.types';

/**
* A custom static hook used for transforming citizen data. The useCallback here might be a little redundant, 
* but it's just for demo-ing purposes, many custom hooks would come along with useMemo and useCallback to improve performance
*/
export const useTransformCitizenDetail = (): (citizenDetail: CitizenDetail) => void => {
	return useCallback((citizenDetail: CitizenDetail): void => {
		if (citizenDetail.age > MAXIMUM_ALLOWED_AGE) {
			citizenDetail.dummyProperty = 'dummy value'
		}
	}, [])
}
