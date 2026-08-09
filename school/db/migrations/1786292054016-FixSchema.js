/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class FixSchema1786292054016 {
    name = 'FixSchema1786292054016'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "GRADE" DROP CONSTRAINT "FK_92c82e6528220f8ca6b202c8fef"`);
        await queryRunner.query(`ALTER TABLE "GRADE" DROP CONSTRAINT "FK_d173d08c8481c8331a3cb48b715"`);
        await queryRunner.query(`ALTER TABLE "GRADE" ALTER COLUMN "student_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRADE" ALTER COLUMN "subject_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD CONSTRAINT "FK_92c82e6528220f8ca6b202c8fef" FOREIGN KEY ("student_id") REFERENCES "STUDENT"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD CONSTRAINT "FK_d173d08c8481c8331a3cb48b715" FOREIGN KEY ("subject_id") REFERENCES "SUBJECT"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "GRADE" DROP CONSTRAINT "FK_d173d08c8481c8331a3cb48b715"`);
        await queryRunner.query(`ALTER TABLE "GRADE" DROP CONSTRAINT "FK_92c82e6528220f8ca6b202c8fef"`);
        await queryRunner.query(`ALTER TABLE "GRADE" ALTER COLUMN "subject_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRADE" ALTER COLUMN "student_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD CONSTRAINT "FK_d173d08c8481c8331a3cb48b715" FOREIGN KEY ("subject_id") REFERENCES "SUBJECT"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "GRADE" ADD CONSTRAINT "FK_92c82e6528220f8ca6b202c8fef" FOREIGN KEY ("student_id") REFERENCES "STUDENT"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
