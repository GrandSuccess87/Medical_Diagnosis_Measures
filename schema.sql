CREATE TEMPORARY VIEW MedicalMeasuresTable
USING org.apache.spark.sql.json
OPTIONS (
<<<<<<< HEAD
<<<<<<< HEAD
=======
  path  "Sample_Data_2016.csv"
>>>>>>> ade706d0bb7ef80a552002fab2a3fca5878b60b6
=======
>>>>>>> ce99654ea2e73a2ca58fe9268aaaf3a447af8535
  path spark.read.format("csv").option("header", "true").load("examples/src/main/resources/Sample_Data_2016.csv")
)

SELECT * FROM MedicalMeasuresTable
