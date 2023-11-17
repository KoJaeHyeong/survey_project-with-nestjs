import { Field, ObjectType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { Participant } from 'src/apis/participant/entities/participant.entity';
import { Survey } from 'src/apis/survey/entities/survey.entity';
import { CommonEntity } from 'src/common/entity/common.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'completed_survey' })
@ObjectType()
export class CompletedSurvey extends CommonEntity {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  completed_survey_id: string;

  @ManyToOne(() => Survey, (survey) => survey.completedSurvey)
  @Field(() => Survey)
  survey: Survey;

  @ManyToOne(() => Participant, (participant) => participant.completedSurvey)
  @Field(() => Participant)
  participant: Participant;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  deleted_at: Date;
}
