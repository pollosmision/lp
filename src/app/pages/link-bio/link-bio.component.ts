import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/core/link.service';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-link-bio',
  templateUrl: './link-bio.component.html',
  styleUrls: ['./link-bio.component.css']
})
export class LinkBioComponent implements OnInit {

  links: Link[] = [];

  constructor(private linkService: LinkService) {}

  ngOnInit(): void {
    this.links = this.linkService.getLinks();
  }

}
