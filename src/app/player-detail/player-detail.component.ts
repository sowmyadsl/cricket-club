import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {  Location} from '@angular/common';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  playerId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = parseInt(urlParameters['id']);
    });
  }

}
