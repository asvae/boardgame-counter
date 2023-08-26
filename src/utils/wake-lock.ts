import { onBeforeUnmount, watch } from 'vue';
import {config} from "../store/store";

export const useWakeLock = () => {
  let wakeLock: WakeLockSentinel | null = null;

  const acquireWakeLock = async () => {
    if ('wakeLock' in navigator && config.useWakeLock) {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
      } catch (err) {
        console.error(`Could not acquire wake lock: ${err.name}, ${err.message}`);
      }
    }
  };

  const releaseWakeLock = () => {
    if (wakeLock) {
      wakeLock.release();
      wakeLock = null;
    }
  };

  watch(
      () => config.useWakeLock,
      (newValue) => {
        if (newValue) {
          acquireWakeLock();
        } else {
          releaseWakeLock();
        }
      },
      { immediate: true }
  );

  onBeforeUnmount(() => {
    releaseWakeLock();
  });
};
