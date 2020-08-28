import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {
  playerForm: Player;
  isLoading: boolean;
  classes: string[];
  campains: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit(): void {
    this.classes = this.playerService.classes;
    this.campains = this.playerService.campains;
    this.isLoading = true;
    this.playerService.getOneById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.playerForm = data;
        this.isLoading = false;
      });
  }

  editPlayer() {
    this.playerService.edit(this.playerForm).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }

}
