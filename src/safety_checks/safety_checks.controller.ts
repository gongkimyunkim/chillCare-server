import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SafetyChecksService } from './safety_checks.service';
import { CreateSafetyCheckDto } from './dto/create-safety_check.dto';
import { UpdateSafetyCheckDto } from './dto/update-safety_check.dto';

@Controller('safety-checks')
export class SafetyChecksController {
  constructor(private readonly safetyChecksService: SafetyChecksService) {}

  @Post()
  create(@Body() createSafetyCheckDto: CreateSafetyCheckDto) {
    return this.safetyChecksService.create(createSafetyCheckDto);
  }

  @Get()
  findAll() {
    return this.safetyChecksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.safetyChecksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSafetyCheckDto: UpdateSafetyCheckDto) {
    return this.safetyChecksService.update(+id, updateSafetyCheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.safetyChecksService.remove(+id);
  }
}
