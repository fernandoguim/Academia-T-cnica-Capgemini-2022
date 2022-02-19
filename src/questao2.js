import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Digite a sua senha:");
		boolean valida = false;
		do {
			String senha = sc.nextLine();
			if (caracteres(senha) || !caracterespecial(senha) || !maiusculo_minusculo(senha)) {
				System.out.print("Senha Inválida!");
					if (caracteres(senha)) {
					System.out.print(" Sua senha deve ter mais " + (6 - senha.length()) + " digitos.");}
						if (!caracterespecial(senha)) {
							System.out.print(" Sua senha deve ter ao menos caracter especial ex: !@#$%^&*()-+");}
								if (!maiusculo_minusculo(senha)) {
										System.out.print(" Sua senha deve ter ao menos uma letra maiuscula ");}
				System.out.print("\n\nTente denovo");
			} else {
				System.out.println("Sua senha é forte!");
				valida = true;
			}
		} while (!valida);
		sc.close();
	}
	public static boolean caracteres(String senha) {
		return (senha.length() < 6);
	}
	public static boolean caracterespecial(String senha) {
		Pattern p = Pattern.compile("^(?=.[!@#$%^&()-+]).+$");
		Matcher m = p.matcher(senha);
		return (m.matches());
	}
	public static boolean maiusculo_minusculo(String senha) {
		Pattern p = Pattern.compile("^(?=.[a-z])(?=.[A-Z]).+$");
		Matcher m = p.matcher(senha);
		return (m.matches());
	}
}