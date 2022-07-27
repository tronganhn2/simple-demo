import { useEffect } from "react"

/**
* Custom hook for running function when mounting and running clean-up effect
*/
export const useMounting = (onMounting: VoidFunction, onUnMounting?: VoidFunction): void => {
    useEffect(() => {
        onMounting()

        return (): void => {
            onUnMounting && onUnMounting()
            /**
                * The rule is disabled because our effect only run one time when component did mount
                * Read the `Note` section from the following link for more information.
                * https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
            */
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
}