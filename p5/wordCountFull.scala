package edu.ucla.cs144

import org.apache.spark.SparkContext
import org.apache.spark.SparkContext._
import org.apache.spark.SparkConf

object WordCount {
  def main(args: Array[String]) {
    val conf = new SparkConf().setAppName("Word Count")
    val sc = new SparkContext(conf)

    val lines = sc.textFile("input.txt")
    val words = lines.flatMap(line => line.split(" "))
    val word1s = words.map(word => (word, 1))
    val wordCounts = word1s.reduceByKey((a,b) => a+b)
    wordCounts.saveAsTextFile("output")

    sc.stop()
  }
}
