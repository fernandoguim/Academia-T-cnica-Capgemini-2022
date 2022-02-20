import java.util.Scanner;
import java.util.Arrays;
import java.util.HashMap;


public class Main {
	static void verifica_se_e_anagrama( String str ){
        
        HashMap<String, Integer> m = new HashMap<>();
        
        for(int i  = 0; i <= str.length(); i++){
        for( int j = i; j < str.length(); j++ ){
                
        char[] caracteres = str.substring(i, j+1).toCharArray();
        Arrays.sort(caracteres);
        String subCaract = new String(caracteres);
        if(m.containsKey(subCaract)){
              m.put(subCaract, m.get(subCaract) + 1);}                    
        else{ m.put(subCaract,1);
                }}}
        int veirifca_par = 0;
        for(String aux: m.keySet()) {
            int n = m.get(aux);
            veirifca_par += (n*(n-1))/2;}
        System.out.print(veirifca_par); 			
    }
	public static void main(String[] args) {
		
		String str;
		Scanner sc = new Scanner(System.in);

		System.out.println("Digite o texto para verificar: ");
        str = sc.nextLine();

        verifica_se_e_anagrama(str);
        sc.close();
	}}