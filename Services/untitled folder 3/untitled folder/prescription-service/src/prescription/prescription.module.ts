import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionResolver } from './prescription.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prescription } from './entities/prescription.entity';
import { PatientResolver } from './patient.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Prescription])],
  providers: [PrescriptionResolver, PrescriptionService,PatientResolver]
})
export class PrescriptionModule {}
