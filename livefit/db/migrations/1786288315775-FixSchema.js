/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class FixSchema1786288315775 {
    name = 'FixSchema1786288315775'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "SKILL" ADD CONSTRAINT "UQ_0780a3ef1d521b8bee1c9b240de" UNIQUE ("name")`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "SKILL" DROP CONSTRAINT "UQ_0780a3ef1d521b8bee1c9b240de"`);
    }
}
