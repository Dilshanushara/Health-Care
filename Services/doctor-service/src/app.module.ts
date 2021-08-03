import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [DoctorModule,GraphQLFederationModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')}
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
