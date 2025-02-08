import { Injectable } from '@nestjs/common';
import { CreateCaregiverStatDto } from './dto/create-caregiver_stat.dto';
import { UpdateCaregiverStatDto } from './dto/update-caregiver_stat.dto';

@Injectable()
export class CaregiverStatsService {
  create(createCaregiverStatDto: CreateCaregiverStatDto) {
    return 'This action adds a new caregiverStat';
  }

  findAll() {
    return `This action returns all caregiverStats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caregiverStat`;
  }

  update(id: number, updateCaregiverStatDto: UpdateCaregiverStatDto) {
    return `This action updates a #${id} caregiverStat`;
  }

  remove(id: number) {
    return `This action removes a #${id} caregiverStat`;
  }
}
