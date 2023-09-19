import { finishLoading, startLoading } from './loaderSlice';

const serviceRequest = async ({
    options = {},
    dispatch,
    serviceMethod,
    payload = {},
}) => {
    try {
        if (!options.skipLoader) {
            dispatch(startLoading());
        }

        const serviceRequestResponse = await serviceMethod(payload);
        return serviceRequestResponse;
    } catch {
        //get some error here
    } finally {
        if (!options.skipLoader) {
            dispatch(finishLoading());
        }
    }
};

export default serviceRequest;
