import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';


@Module({
  imports: [GraphQLGatewayModule.forRoot({
    server:{
      cors:true
    },
    gateway:{
      serviceList:[
        {name:"patient",url:"http://localhost:3005/graphql"},
        {name:"doctor",url:"http://localhost:3006/graphql"},
        {name:"medicine",url:"http://localhost:3007/graphql"},
        {name:"prescription",url:"http://localhost:3008/graphql"},
      ]
    }
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
