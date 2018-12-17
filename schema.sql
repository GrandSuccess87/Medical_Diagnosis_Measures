CREATE TEMPORARY VIEW MedicalMeasuresTable
USING org.apache.spark.sql.json
OPTIONS (
  path  "Sample_Data_2016.csv"
  path spark.read.format("csv").option("header", "true").load("examples/src/main/resources/Sample_Data_2016.csv")
)

SELECT * FROM MedicalMeasuresTable
