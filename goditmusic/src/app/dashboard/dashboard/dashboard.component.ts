import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from "../../shared/components/modal/ui-modal/ui-modal.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('confirmModal', {static: false}) confirmModal: UiModalComponent;
  playSong: boolean[] = [false, false, false, false];

  library = [
    {
      index: 0,
      imageSrc: 'lib-img1.jpg',
      videoSrc: 'https://goditmusic.com/admin/index.php/wp-json/client-app/v1/play-preview?media=17820&amp;ref=&amp;user=',
      heading: 'KiDi - Enjoyment (Official Video)',
      description: 'Some content for description',
      views: '792',
      likes: '37'
    },
    {
      index: 1,
      imageSrc: 'lib-img2.jpg',
      videoSrc: 'https://goditmusic.com/admin/index.php/wp-json/client-app/v1/play-preview?media=17820&amp;ref=&amp;user=',
      heading: 'Wendy Shay – Tuff Skin Girl (Prod By Mog Beatz)',
      description: 'Wendy Shay – Tuff Skin Girl (Prod By Mog Beatz)',
      views: '92',
      likes: '3'
    },
    {
      index: 2,
      imageSrc: 'lib-img3.jpeg',
      videoSrc: 'https://goditmusic.com/admin/index.php/wp-json/client-app/v1/play-preview?media=17820&amp;ref=&amp;user=',
      heading: 'Freda Rhymz – Agoro ft. Article Wan (Prod. by Article Wan)',
      description: 'Freda Rhymz – Agoro ft. Article Wan (Prod. by Article Wan)',
      views: '78',
      likes: '44'
    },
    {
      index: 3,
      imageSrc: 'lib-img4.jpg',
      videoSrc: 'https://goditmusic.com/admin/index.php/wp-json/client-app/v1/play-preview?media=17820&amp;ref=&amp;user=',
      heading: 'Agye Hee',
      description: 'Praise banger that restores lost hope and resounds possibility for all.',
      views: '3',
      likes: '34'
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      // TODO: Show dialog again
      // this.confirmModal.show();
    }, 100);
  }

  showVideo(index): void {
    this.playSong[index] = true;
  }

  navigate(): void {
    window.location.href = 'https://goditmusic.com';
  }
}
