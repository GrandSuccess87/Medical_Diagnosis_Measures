CREATE TEMPORARY VIEW MedicalMeasuresTable
USING org.apache.spark.sql.json
OPTIONS (
<<<<<<< HEAD
=======
  path  "Sample_Data_2016.csv"
>>>>>>> ade706d0bb7ef80a552002fab2a3fca5878b60b6
  path spark.read.format("csv").option("header", "true").load("examples/src/main/resources/Sample_Data_2016.csv")
)

SELECT * FROM MedicalMeasuresTable
