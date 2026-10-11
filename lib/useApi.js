'use client';

import { useEffect, useState } from 'react';

// Runs `fetcher` once on mount (and again when retry() is called).
export function useApi(fetcher) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let alive = true;
    fetcher()
      .then((data) => alive && setState({ data, loading: false, error: null }))
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') console.warn('[api]', error);
        if (alive) setState({ data: null, loading: false, error });
      });
    return () => { alive = false; };
    // fetcher is a stable inline function per component; only retry should re-run
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  const retry = () => { setState({ data: null, loading: true, error: null }); setTick((n) => n + 1); };
  return { ...state, retry };
}
