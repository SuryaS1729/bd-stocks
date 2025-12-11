'use client'

import React from 'react'
import { useEffect, useRef } from 'react'
type Props = {
    scriptUrl: string,
    config: Record<string, unknown>
}

const useTradingViewWidget = ({scriptUrl,config}: Props, height=600) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(
      
    () => {

          if(!containerRef.current) return;
        if(containerRef.current?.dataset.loaded) return;
        containerRef.current.innerHTML=`<div class="tradingview-widget-container__widget" style="width: 100%;height: ${height}px;"></div>`;

      const script = document.createElement("script");
      script.src = scriptUrl;

      script.async = true;
      script.innerHTML = JSON.stringify(config);
        

    },
    [scriptUrl, config,height]
  );
  return containerRef;

}

export default useTradingViewWidget