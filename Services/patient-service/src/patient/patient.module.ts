import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientResolver } from './patient.resolver';
import { Patient } from './entity/patient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Patient])],
  providers: [PatientService, PatientResolver],
  exports:[PatientService]
})
export class PatientModule {}
