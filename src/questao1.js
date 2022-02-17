// Questaão 1 do desafio da Academia Capgemini 
// Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. 
//A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

import java.util.Scanner;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner (System.in);
    ArrayList<String> degraus = new ArrayList<>(); 

    System.out.print("Digite a quantidade de vezes: ");
    int n = sc.nextInt(); 

    for (int i = 0; i < n; i++) {
    degraus.add(" ".repeat(n - i) + "*".repeat(i + 1));
    }

    for (String d : degraus ) {
    System.out.println(d);
    }
 
  }
}