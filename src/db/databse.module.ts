import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'abd',
        database: 'atp3',
        entities: [User],
        synchronize: true,
	}),
	],
})
export class DatabaseModule {}
