import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBook() { 
    return [
      {
        image: 'https://salt.tikicdn.com/cache/400x400/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp',
        name: 'Thao Túng Tâm Lý',
        author: 'Shannon Thomas, LCSW',
        price: 96300
      },
      {
        image: 'https://salt.tikicdn.com/cache/400x400/ts/product/b6/a0/4c/6c1f410c6009740218e6b1107306babd.jpg.webp',
        name: 'Tâm Lý Học - Nghệ Thuật Giải Mã Hành Vi',
        author: 'Trần Lộ',
        price: 105000
      },
      {
        image: 'https://salt.tikicdn.com/cache/400x400/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp',
        name: 'Xé Vài Trang Thanh Xuân, Đổi Lấy Một Bản Thân Nỗ Lực',
        author: 'Văn Cát Nhi',
        price: 69100
      }
    ]
  }
}
