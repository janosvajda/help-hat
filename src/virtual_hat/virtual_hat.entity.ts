import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VirtualHat extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  public value!: number;

  /*
   * Relation IDs
   */
  @Column({ type: 'integer' })
  public userId!: number;
}
