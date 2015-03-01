package MyCompJuiceSize;

import java.util.Comparator;

import Components.Components;
import Juice.Juice;

public class MyCompJuiceSize implements Comparator<Juice>{
	@Override
	public int compare(Juice A,Juice B) {
		if(A.getSize()>B.getSize())
		{
			return 1;
		}
		else if(A.getSize() == B.getSize())
		{
			int result = 0;
			for (int i = 0; i < A.getSize(); i++){
				Components C = A.getComponents(i);
				Components D = B.getComponents(i);
				result += C.getComponent().compareToIgnoreCase(D.getComponent());
			}
            return result;
		}
		
	     return -1;
	}

}
