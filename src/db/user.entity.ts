import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  // Other properties and columns

  // You can also define relationships with other entities using decorators like @ManyToOne, @OneToMany, etc.

  // Additional methods or business logic can be added to the entity class as needed
}
