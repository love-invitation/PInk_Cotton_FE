'use client';

import { useEffect, useRef } from 'react';

import { CallbackType } from './useClickAway.type';

const events: ['mousedown', 'touchstart'] = ['mousedown', 'touchstart'];

const useClickAway = <T,>(callback: CallbackType) => {
  const ref = useRef<T | null>(null);
  const saveCallback = useRef(callback);

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const element = ref.current;

    if (!element || !(element instanceof HTMLElement)) {
      return;
    }

    const eventHandler = (e: MouseEvent | TouchEvent) => {
      const { target } = e;

      if (!target || !(target instanceof HTMLElement)) {
        return;
      }

      if (element.contains(target)) {
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
