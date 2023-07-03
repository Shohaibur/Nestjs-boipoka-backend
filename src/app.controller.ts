import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto, email } from './dto/create.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


 //'''''''''''''Code''''''''''''''//
  
  @Post('Email')
  createUser(@Body() create:CreateDto){
    email.push(create);
    return 'user created successfully'
  }

  @Get('Email')
  getUsers(){
    return email ;
    
  }

}
