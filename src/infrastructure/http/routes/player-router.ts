import { BaseRouter } from './router'
import { PlayerController } from '../controllers/player-controller'



export class PlayerRouter extends BaseRouter<PlayerController>{
  constructor(){
    super(PlayerController)
  }

  routes():void{
    this.router.get('/players', (_, res) => {
      console.log('Router check')
      void this.controller.getAllPlayers(_, res)
    })
    this.router.post('/players', (req, res) => {
      void this.controller.newPlayer(req,res)
    })
    this.router.patch('/players',(req,res)=>{
      void this.controller.updatePlayer(req,res)
    })
  }
}
