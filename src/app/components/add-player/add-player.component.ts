import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  playerForm: Player;
  classes: string[];
  campains: string[];


  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.playerForm = new Player();
    this.classes = this.playerService.getClasses();
    this.campains = this.playerService.getCampains();
  }

  addPlayer(){
    this.playerService.add(this.playerForm).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }

}
