package MyComp;

import java.util.Comparator;

public class MyComp implements Comparator<String>{

	public int compare(String A, String B) {
		if(A.length()<B.length()){
			for (int i = 0; i < A.length(); i++){
				if((int)A.charAt(i)<(int)B.charAt(i)){
					return -1;
				}
				if((int)A.charAt(i)>(int)B.charAt(i)){
					return 1;
				}
			}
		}
		else{
			for (int i = 0; i < B.length(); i++){
				if((int)A.charAt(i)<(int)B.charAt(i)){
					return -1;
				}
				if((int)A.charAt(i)>(int)B.charAt(i)){
					return 1;
				}
			}
		}
		return 0;
	}
	
}