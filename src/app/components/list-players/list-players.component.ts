import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})

export class ListPlayersComponent implements OnInit {
  // player: Player;
  players: Player[];
  isLoading: boolean;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.playerService.getAll().subscribe(data => {
      this.players = data;
      this.isLoading = false;
    });
  }

  deletePlayer(player: Player) {
    this.isLoading = true;
    this.playerService.delete(player).subscribe(data => {
      this.playerService.getAll().subscribe(allPlayer => {
        this.players = allPlayer;
        this.isLoading = false;
      });
    });
  }

  editPlayer(player: Player) {

  }

}
