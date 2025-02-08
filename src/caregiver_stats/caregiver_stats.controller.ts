import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaregiverStatsService } from './caregiver_stats.service';
import { CreateCaregiverStatDto } from './dto/create-caregiver_stat.dto';
import { UpdateCaregiverStatDto } from './dto/update-caregiver_stat.dto';

@Controller('caregiver-stats')
export class CaregiverStatsController {
  constructor(private readonly caregiverStatsService: CaregiverStatsService) {}

  @Post()
  create(@Body() createCaregiverStatDto: CreateCaregiverStatDto) {
    return this.caregiverStatsService.create(createCaregiverStatDto);
  }

  @Get()
  findAll() {
    return this.caregiverStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caregiverStatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaregiverStatDto: UpdateCaregiverStatDto) {
    return this.caregiverStatsService.update(+id, updateCaregiverStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caregiverStatsService.remove(+id);
  }
}
