'use client';

import { useEffect } from 'react';

export default function WhatsAppBoot(){
  useEffect(()=>{
    const button=document.querySelector<HTMLAnchorElement>('.whatsapp');
    if(!button) return;
    button.href='https://wa.me/?text='+encodeURIComponent("Hello Zenith Technologies, I'd like to book a smart-home consultation.");
    button.target='_blank';
    button.rel='noopener noreferrer';
    button.setAttribute('aria-label','Open WhatsApp to contact Zenith Technologies');
  },[]);
  return null;
}
