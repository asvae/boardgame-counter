import {type ComputedRef, ref, watch} from "vue";

export const useChangedValue = (value: ComputedRef<number>) => {
  const initialValue = ref(value.value);
  const changedValue = ref(0);
  let resetTimeout: ReturnType<typeof setTimeout> | null = null;

  const resetChangedValue = () => {
    changedValue.value = 0;
    initialValue.value = value.value;
  };

  watch(
      value,
      (newValue, oldValue) => {
        changedValue.value = newValue - initialValue.value;

        if (resetTimeout) {
          clearTimeout(resetTimeout);
        }

        resetTimeout = setTimeout(() => {
          resetChangedValue();
        }, 2000);
      }
  );

  return changedValue;
};
