CREATE TEMPORARY VIEW MedicalMeasuresTable
USING org.apache.spark.sql.json
OPTIONS (
  path spark.read.format("csv").option("header", "true").load("examples/src/main/resources/Sample_Data_2016.csv")
)

SELECT * FROM MedicalMeasuresTable

CREATE TEMPORARY TABLE parquetTable
USING org.apache.spark.sql.parquet
OPTIONS (
  path "examples/src/main/resources/examples/src/main/resources/Sample_Data_2016.parquet"
)

SELECT * FROM parquetTable
