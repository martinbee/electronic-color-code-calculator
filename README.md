# Electronic Color Code Calculator

## ECC Definition
The electronic color code is used to indicate the values or ratings of
electronic components, very commonly for resistors.

## Description
This app implements an electronic color code calculator based on the information
found [here](http://en.wikipedia.org/wiki/Electronic_color_code) on Wikipedia
and the interface provided below:

```
public interface IOhmValueCalculator

{

   /// <summary>

   /// Calculates the Ohm value of a resistor based on the band colors.

   /// </summary>

   /// <param name="bandAColor">The color of the first figure of component value band.</param>

   /// <param name="bandBColor">The color of the second significant figure band.</param>

   /// <param name="bandCColor">The color of the decimal multiplier band.</param>

   /// <param name="bandDColor">The color of the tolerance value band.</param>

   int CalculateOhmValue(string bandAColor, string bandBColor, string bandCColor, string bandDColor);

}
```

## Tasks
- Write a class that implements the following interface. Feel free to include any supporting types as necessary.
- Using your favorite unit test framework, write the unit tests you feel are necessary to adequately test the code you wrote as your answer to question one.
- Create a .NET MVC or Reactjs web interface that will allow someone to use the calculator you created in step one.
- Submit your code by a public or private repository like github, gitlab or bitbucket.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
