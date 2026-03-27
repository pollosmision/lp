import { Injectable } from '@angular/core';
import { Link } from '../models/link.model';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  getLinks(): Link[] {
    return [
      {
        label: 'Menú',
        url: '#',
        icon: 'bi-link-45deg'
      },
      {
        label: 'Whatsapp',
        url: 'https://wa.me/591XXXXXXXX',
        icon: 'bi-whatsapp'
      },
      {
        label: 'Facebook',
        url: '#',
        icon: 'bi-facebook'
      },
      {
        label: 'Instagram',
        url: '#',
        icon: 'bi-instagram'
      },
      {
        label: 'TikTok',
        url: '#',
        icon: 'bi-tiktok'
      }
    ];
  }
  
}
