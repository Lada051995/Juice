package Sort;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

import MyComp.MyComp;

public class Sort implements Runnable{
	
	 ArrayList<String>a;
	 
	 public Sort(ArrayList<String> al){
			a = al;
	 }
	@SuppressWarnings("unchecked")
	@Override
	 public void run() {
		 Comparator A = new MyComp();
		 Collections.sort(a, A);
	 }
}
