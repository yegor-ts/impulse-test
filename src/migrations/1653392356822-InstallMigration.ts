import { MigrationInterface, QueryRunner, Table } from 'typeorm';
export class InstallMigration1653392356822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'installs',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'idvf',
            type: 'char',
            length: '40',
            isUnique: true,
          },
          {
            name: 'app_name',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'city',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'device_model',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'install_time',
            type: 'date',
            isUnique: true,
          },
          {
            name: 'date',
            type: 'date',
            isUnique: true,
          },
          {
            name: 'att',
            type: 'varchar',
            length: '20',
            isUnique: true,
          },
          {
            name: 'is_lat',
            type: 'boolean',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP(6)',
            onUpdate: 'CURRENT_TIMESTAMP(6)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('installs');
  }
}
