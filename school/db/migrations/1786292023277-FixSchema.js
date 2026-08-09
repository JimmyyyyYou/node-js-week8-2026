/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class FixSchema1786292023277 {
    name = 'FixSchema1786292023277'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "STUDENT" ADD "class_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "STUDENT" ADD CONSTRAINT "FK_4fb1ca1a74779f553a538b83e26" FOREIGN KEY ("class_id") REFERENCES "CLASS"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "STUDENT" DROP CONSTRAINT "FK_4fb1ca1a74779f553a538b83e26"`);
        await queryRunner.query(`ALTER TABLE "STUDENT" DROP COLUMN "class_id"`);
    }
}
