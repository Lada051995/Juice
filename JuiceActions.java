package JuiceActions;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;
import java.util.TreeSet;

import Components.Components;
import Juice.Juice;
import MyCompJuiceSize.MyCompJuiceSize;
import Sort.Sort;

public class JuiceActions {
	
	ArrayList<Juice> juices = new ArrayList<Juice>();
	ArrayList<String> allJuicesComponents = new ArrayList<String>();
	TreeSet<String> ts = new TreeSet<String>();
	private int washes = 0;
	
	public void juiceMix(){
		try {
			FileReader file = new FileReader("juice.in");
			read(file);
			FileWriter file1 = new FileWriter("juice1.out");
			write_out1(file1);
			sort();
			FileWriter file2 = new FileWriter("juice2.out");
			write_out2(file2);
			sortJuicesSize();
			wash();
			FileWriter file3 = new FileWriter("juice3.out");
			write_number(file3);
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		catch (IOException e) {
		    e.printStackTrace();
	    }	
		catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}
			
	void read(FileReader file){
		BufferedReader br = new BufferedReader(file);
		try {
			Juice A;
			while(br.ready()){
				StringTokenizer st = new StringTokenizer(br.readLine());
				A = new Juice();
				while(st.hasMoreTokens()){
					String str = st.nextToken();
					allJuicesComponents.add(str);
					ts.add(str.toLowerCase());
					A.getComponents().add(new Components(str.toLowerCase()));
				}
				juices.add(A);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	void sort() throws InterruptedException{
		
		Sort sort = new Sort(allJuicesComponents);
		Thread th = new Thread(sort);
		th.start();
		th.join();	
	 }
	
	void write_out1(FileWriter file){
		BufferedWriter out = null;
		 try {
			 out =  new BufferedWriter(file);
			 for (String A : ts){
				 out.write(A);
				 out.newLine();
			 }
				out.close(); 
			 }catch (IOException e) {
				e.printStackTrace();
			 }
	}
	
	void write_out2(FileWriter file){
		 BufferedWriter out = null;
		 try {
			 out =  new BufferedWriter(file);
			 for (String A : allJuicesComponents){
				out.write(A);
				out.newLine();
			 }
				out.close(); 
			 }catch (IOException e) {
				e.printStackTrace();
			 }
	}
	
	void write_number(FileWriter file){
		BufferedWriter out = null;
		out = new BufferedWriter(file);
		Integer r = new Integer(washes);
		String str = r.toString();
		try {
			out.write(str);
			out.newLine();
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void sortJuicesSize(){
		Collections.sort(juices, new MyCompJuiceSize());
	}
	
	int wash(){
		for (int i = 0; i < juices.size(); i++){
			Juice A = juices.get(i);
			if(A.getDone() == false){
				washes++;
				A.changeDone();
				for (int j = i; j < juices.size(); j++){
					Juice B = juices.get(j);
					if (A.getSize() < B.getSize() || A.equals(B)){
						if(B.getComponents().containsAll(A.getComponents()) == true && B.getDone() == false){
							A = B;
							B.changeDone();
						}
					}
				}
			}
		}
		
		return washes;
	}

}
