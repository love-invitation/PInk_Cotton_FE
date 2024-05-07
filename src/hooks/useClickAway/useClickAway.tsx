'use client';

import { useEffect, useRef } from 'react';

import { CallbackType } from './useClickAway.type';

const events = ['mousedown', 'touchstart'];

const useClickAway = (callback: CallbackType) => {
  const ref = useRef(null);
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current as unknown as HTMLElement;

    if (!element) {
      return;
    }

    const eventHandler = (e: Event) => {
      const { target } = e;

      if (element.contains(target as Node)) {
        return;
      }

      saveCallback.current(e);
    };

    events.forEach((event) => {
      document.addEventListener(event, eventHandler);
    });

    return () => {
      events.forEach((eventName) => {
        document.removeEventListener(eventName, eventHandler);
      });
    };
  }, []);

  return ref;
};

export default useClickAway;
