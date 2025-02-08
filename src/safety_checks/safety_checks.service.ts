import { Injectable } from '@nestjs/common';
import { CreateSafetyCheckDto } from './dto/create-safety_check.dto';
import { UpdateSafetyCheckDto } from './dto/update-safety_check.dto';

@Injectable()
export class SafetyChecksService {
  create(createSafetyCheckDto: CreateSafetyCheckDto) {
    return 'This action adds a new safetyCheck';
  }

  findAll() {
    return `This action returns all safetyChecks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} safetyCheck`;
  }

  update(id: number, updateSafetyCheckDto: UpdateSafetyCheckDto) {
    return `This action updates a #${id} safetyCheck`;
  }

  remove(id: number) {
    return `This action removes a #${id} safetyCheck`;
  }
}
